require 'rqrcode'
require 'rubygems'

class TicketsController < ApplicationController

  before_action :set_ticket, only: [:showqr, :show, :update, :destroy]

  # GET /tickets
  def index
    @tickets = Ticket.all

    render json: @tickets
  end

  # GET /tickets/1
  # def show
  #   render json: @ticket
  # end

  # QRCode /qrcode/1
  def showqr
    @code = @ticket.code
    @qrcode = RQRCode::QRCode.new(@code, :size => 4, :level => :h)
    @svg = @qrcode.as_svg(
      offset: 0,
      color: '000',
      shape_rendering: 'crispEdges',
      module_size: 6,
      standalone: true
    )
    render xml: @svg
  end

  # POST /tickets
  def create
    @ticket = Ticket.create(ticket_params)
    if @ticket.save
      render json: @ticket, status: :created, location: @ticket
    else
      render json: @ticket.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tickets/1
  def update
    if @ticket.update(ticket_params)
      render json: @ticket
    else
      render json: @ticket.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tickets/1
  def destroy
    @ticket.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def ticket_params
      params.require(:ticket).permit(:code, :time_slot, :event_id, :user_id)
    end
end
